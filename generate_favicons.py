from PIL import Image
from PIL import Image

input_file = "Analytics_padded.png"   # your padded graphic
sizes = [16, 32, 180]

# Generate PNG favicon sizes
for s in sizes:
    img = Image.open(input_file).convert("RGBA")
    img = img.resize((s, s), Image.LANCZOS)
    img.save(f"favicon-{s}x{s}.png")

# Generate multi-resolution ICO
img = Image.open(input_file).convert("RGBA")
img.save("favicon.ico", sizes=[(16, 16), (32, 32)])
