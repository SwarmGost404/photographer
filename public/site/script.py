import os
from PIL import Image
from pathlib import Path

# Настройки
INPUT_FOLDER = "."  # Папка с исходными фото
OUTPUT_FOLDER = "webp"  # Папка для результата
QUALITY = 85  # Качество (0-100)
RECURSIVE = True  # Обрабатывать подпапки

# Создаем папку для результатов
Path(OUTPUT_FOLDER).mkdir(exist_ok=True)

# Поддерживаемые форматы
extensions = ('.png', '.jpg', '.jpeg', '.bmp', '.tiff', '.gif')

# Поиск всех изображений
image_files = []
for ext in extensions:
    if RECURSIVE:
        image_files.extend(Path(INPUT_FOLDER).rglob(f"*{ext}"))
        image_files.extend(Path(INPUT_FOLDER).rglob(f"*{ext.upper()}"))
    else:
        image_files.extend(Path(INPUT_FOLDER).glob(f"*{ext}"))
        image_files.extend(Path(INPUT_FOLDER).glob(f"*{ext.upper()}"))

# Конвертация
for img_path in image_files:
    try:
        with Image.open(img_path) as img:
            # Сохраняем структуру папок
            rel_path = img_path.relative_to(INPUT_FOLDER).parent
            output_dir = Path(OUTPUT_FOLDER) / rel_path
            output_dir.mkdir(parents=True, exist_ok=True)
            
            output_file = output_dir / f"{img_path.stem}.webp"
            img.save(output_file, 'WEBP', quality=QUALITY)
            print(f"✓ {img_path} -> {output_file}")
    except Exception as e:
        print(f"✗ Ошибка: {img_path} - {e}")

print("Готово!")