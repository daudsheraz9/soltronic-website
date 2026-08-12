import os
from PIL import Image

pub_dir = r'd:\soltronic-website\public'

converted_count = 0
total_saved_bytes = 0

for root, dirs, files in os.walk(pub_dir):
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg')) and not f.lower().endswith('.webp'):
            path = os.path.join(root, f)
            size = os.path.getsize(path)
            
            # Compress files over 200 KB
            if size > 200 * 1024:
                rel = os.path.relpath(path, pub_dir)
                try:
                    with Image.open(path) as img:
                        # Convert RGBA to RGB if needed for saving
                        if img.mode in ('RGBA', 'LA') and f.lower().endswith(('.jpg', '.jpeg')):
                            background = Image.new('RGB', img.size, (255, 255, 255))
                            background.paste(img, mask=img.split()[-1])
                            img = background

                        # Save as WebP
                        webp_path = os.path.splitext(path)[0] + '.webp'
                        img.save(webp_path, 'WEBP', quality=82, optimize=True)
                        
                        new_size = os.path.getsize(webp_path)
                        saved = size - new_size
                        total_saved_bytes += saved
                        converted_count += 1
                        print(f"Compressed {rel}: {size/1024:.1f} KB -> {new_size/1024:.1f} KB (Saved {saved/1024:.1f} KB)")
                except Exception as e:
                    print(f"Error optimizing {rel}: {e}")

print(f"\nOptimization Complete!")
print(f"Total files compressed: {converted_count}")
print(f"Total space saved: {total_saved_bytes / 1024 / 1024:.2f} MB")
