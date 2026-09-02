#!/usr/bin/env python3
"""
Ingestione delle fotografie: da material/ (originali, fuori dal repository)
a src/assets/photos/ (sorgenti versionate, lato lungo 2400 px, senza EXIF).

Legge scripts/photos.manifest.json. Idempotente: rigenera una derivata solo se
manca o se l'originale è più recente. Usa `sips`, presente su ogni macOS, che
legge anche gli HEIC dell'iPhone.

    python3 scripts/ingest-photos.py            # genera il mancante
    python3 scripts/ingest-photos.py --force    # rigenera tutto
    python3 scripts/ingest-photos.py --check    # non scrive, dice cosa manca
"""

from __future__ import annotations

import json
import os
import shutil
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MATERIAL = os.path.join(ROOT, "material")
DEST = os.path.join(ROOT, "src", "assets", "photos")
MANIFEST = os.path.join(ROOT, "src", "data", "foto.manifest.json")

LATO_LUNGO = 2400
QUALITA = "80"


def sips(*args: str) -> None:
    r = subprocess.run(["sips", *args], capture_output=True, text=True)
    if r.returncode != 0:
        raise RuntimeError(f"sips {' '.join(args)}\n{r.stderr.strip()}")


def lato_lungo_originale(percorso: str) -> int:
    r = subprocess.run(["sips", "-g", "pixelWidth", "-g", "pixelHeight", percorso],
                       capture_output=True, text=True)
    misure = [int(riga.split(":")[1]) for riga in r.stdout.splitlines()
              if "pixelWidth:" in riga or "pixelHeight:" in riga]
    return max(misure) if misure else LATO_LUNGO


def derivata(origine: str, destinazione: str) -> None:
    """Converte in JPEG, riduce il lato lungo, elimina i metadati.

    Non ingrandisce mai: un originale più piccolo di LATO_LUNGO resta com'è.
    """
    obiettivo = min(LATO_LUNGO, lato_lungo_originale(origine))
    tmp = tempfile.mkdtemp()
    try:
        grezza = os.path.join(tmp, "out.jpg")
        sips("-s", "format", "jpeg", "-s", "formatOptions", QUALITA,
             "-Z", str(obiettivo), origine, "--out", grezza)
        # sips ricopia i metadati dell'originale: li azzeriamo.
        for chiave in ("make", "model", "software", "artist", "copyright",
                       "description", "creation"):
            subprocess.run(["sips", "-d", chiave, grezza],
                           capture_output=True, text=True)
        shutil.move(grezza, destinazione)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


def main() -> int:
    forza = "--force" in sys.argv
    solo_controllo = "--check" in sys.argv

    with open(MANIFEST, encoding="utf-8") as f:
        manifesto = json.load(f)

    os.makedirs(DEST, exist_ok=True)

    mancanti_origine: list[str] = []
    da_generare: list[tuple[str, str, str]] = []
    invariate = 0

    for voce in manifesto["foto"]:
        origine = os.path.join(MATERIAL, voce["sorgente"])
        destinazione = os.path.join(DEST, voce["id"] + ".jpg")

        if not os.path.exists(origine):
            mancanti_origine.append(voce["sorgente"])
            continue

        if not forza and os.path.exists(destinazione):
            if os.path.getmtime(destinazione) >= os.path.getmtime(origine):
                invariate += 1
                continue

        da_generare.append((voce["id"], origine, destinazione))

    if mancanti_origine:
        print("Originali mancanti in material/ (%d):" % len(mancanti_origine),
              file=sys.stderr)
        for m in mancanti_origine:
            print("  " + m, file=sys.stderr)
        if not os.path.isdir(MATERIAL):
            print("\nLa cartella material/ non è nel repository: è normale su un "
                  "clone.\nLe sorgenti versionate in src/assets/photos/ bastano "
                  "per costruire il sito.", file=sys.stderr)
        return 1

    if solo_controllo:
        print(f"{invariate} aggiornate, {len(da_generare)} da generare.")
        for ident, _, _ in da_generare:
            print("  da generare: " + ident)
        return 0

    for i, (ident, origine, destinazione) in enumerate(da_generare, 1):
        print(f"[{i}/{len(da_generare)}] {ident}  ←  "
              f"{os.path.relpath(origine, MATERIAL)}")
        derivata(origine, destinazione)

    peso = sum(os.path.getsize(os.path.join(DEST, f))
               for f in os.listdir(DEST) if f.endswith(".jpg"))
    numero = len([f for f in os.listdir(DEST) if f.endswith(".jpg")])
    print(f"\n{numero} fotografie in src/assets/photos/ — {peso / 1048576:.1f} MB "
          f"({invariate} già aggiornate)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
