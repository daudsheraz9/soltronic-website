import os

pub_dir = r'd:\soltronic-website\public'
large_files = []

for root, dirs, files in os.walk(pub_dir):
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            path = os.path.join(root, f)
            size = os.path.getsize(path)
            rel = os.path.relpath(path, pub_dir)
            large_files.append((size, rel))

large_files.sort(reverse=True)
print(f"Top 25 Largest Images in public/:")
for size, rel in large_files[:25]:
    print(f"  {size / 1024 / 1024:.2f} MB - {rel}")
