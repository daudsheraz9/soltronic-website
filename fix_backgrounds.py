import os
from PIL import Image

try:
    from pillow_heif import register_heif_opener
    register_heif_opener()
except ImportError:
    pass

img_src_dir = r"d:\soltronic-website\public\Products-images"
img_out_dir = r"d:\soltronic-website\public\products-webp"

os.makedirs(img_out_dir, exist_ok=True)

image_files = os.listdir(img_src_dir)
print(f"Processing {len(image_files)} images for white background conversion...")

fixed_count = 0

for fname in image_files:
    fpath = os.path.join(img_src_dir, fname)
    if os.path.isfile(fpath):
        base_name = os.path.splitext(fname)[0]
        out_fname = f"{base_name}.webp"
        out_path = os.path.join(img_out_dir, out_fname)
        
        try:
            with Image.open(fpath) as img:
                # Convert palette to RGBA if needed
                if img.mode == 'P':
                    img = img.convert('RGBA')
                
                # Check for alpha channel
                if img.mode in ('RGBA', 'LA') or 'transparency' in img.info:
                    # Create a solid white background
                    bg = Image.new('RGB', img.size, (255, 255, 255))
                    alpha_mask = img.split()[-1] if img.mode in ('RGBA', 'LA') else None
                    if alpha_mask:
                        bg.paste(img, (0, 0), mask=alpha_mask)
                    else:
                        bg.paste(img, (0, 0))
                    final_img = bg
                else:
                    final_img = img.convert('RGB')
                
                final_img.save(out_path, 'WEBP', quality=90)
                fixed_count += 1
                print(f"Fixed background & saved: {fname} -> {out_fname}")
        except Exception as e:
            print(f"Error processing {fname}: {e}")

print(f"\nDone! Fixed background for {fixed_count} images.")
