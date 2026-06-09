import os
from PIL import Image

# Создаём папку preview
os.makedirs('preview', exist_ok=True)

files = [f for f in os.listdir('.') if f.lower().endswith('.webp')]

for i, file in enumerate(files, 1):
    img = Image.open(file)
    
    # Получаем размеры
    width, height = img.size
    
    # Определяем размер обрезки (минимальная сторона)
    crop_size = min(width, height)
    
    # Вычисляем координаты для обрезки по центру
    left = (width - crop_size) // 2
    top = (height - crop_size) // 2
    right = left + crop_size
    bottom = top + crop_size
    
    # Обрезаем до квадрата
    img_cropped = img.crop((left, top, right, bottom))
    
    # Ресайзим до 512x512
    img_resized = img_cropped.resize((512, 512), Image.LANCZOS)
    
    # Сохраняем
    img_resized.save(f'preview/{file}', 'WEBP', quality=80)
    
    print(f"✅ [{i}/{len(files)}] {file} ({width}x{height} → 512x512)")

print("Готово!")