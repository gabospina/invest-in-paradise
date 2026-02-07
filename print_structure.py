#!/usr/bin/env python3
"""
Print Manus Website Directory Structure
Run: python print_structure.py
"""

import os
from pathlib import Path

def print_directory_structure(start_path=".", max_depth=5, exclude_dirs=None):
    """
    Print a visual directory tree structure
    
    Args:
        start_path: Directory to start from (default: current directory)
        max_depth: Maximum depth to traverse
        exclude_dirs: List of directory names to exclude
    """
    if exclude_dirs is None:
        exclude_dirs = ['.git', '__pycache__', 'node_modules', '.vscode', '.idea', 'venv', 'env']
    
    start_path = Path(start_path).resolve()
    
    print(f"\n{'='*60}")
    print(f"📁 MANUS WEBSITE DIRECTORY STRUCTURE")
    print(f"📂 Root: {start_path}")
    print(f"{'='*60}\n")
    
    for root, dirs, files in os.walk(start_path):
        # Calculate depth
        level = root.replace(str(start_path), '').count(os.sep)
        
        # Skip if exceeds max depth
        if level > max_depth:
            continue
        
        # Filter out excluded directories
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        
        # Calculate indentation
        indent = '│   ' * (level - 1) + '├── ' if level > 0 else ''
        
        # Print current directory
        rel_path = os.path.relpath(root, start_path)
        if rel_path == '.':
            print(f"📁 {start_path.name}/")
        else:
            print(f"{indent}📁 {os.path.basename(root)}/")
        
        # Print files in current directory
        sub_indent = '│   ' * level + '├── '
        for i, file in enumerate(sorted(files)):
            # Skip hidden files
            if file.startswith('.'):
                continue
                
            # Different icons for different file types
            if file.endswith(('.html', '.htm')):
                icon = '🌐'
            elif file.endswith(('.css', '.scss', '.less')):
                icon = '🎨'
            elif file.endswith(('.js', '.jsx', '.ts', '.tsx')):
                icon = '📜'
            elif file.endswith(('.py', '.pyc', '.pyo')):
                icon = '🐍'
            elif file.endswith(('.json', '.xml', '.yml', '.yaml')):
                icon = '📄'
            elif file.endswith(('.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp')):
                icon = '🖼️'
            elif file.endswith(('.md', '.txt', '.rst')):
                icon = '📝'
            else:
                icon = '📄'
            
            # Last file in directory
            if i == len(files) - 1 and not dirs:
                sub_indent = '│   ' * level + '└── '
            
            print(f"{sub_indent}{icon} {file}")

def print_summary(start_path="."):
    """Print summary of files by type"""
    print(f"\n{'='*60}")
    print("📊 FILE TYPE SUMMARY")
    print(f"{'='*60}")
    
    extensions = {}
    total_files = 0
    
    for root, dirs, files in os.walk(start_path):
        # Skip excluded directories
        dirs[:] = [d for d in dirs if d not in ['.git', 'node_modules']]
        
        for file in files:
            if file.startswith('.'):
                continue
                
            ext = os.path.splitext(file)[1].lower()
            if ext:
                extensions[ext] = extensions.get(ext, 0) + 1
                total_files += 1
    
    # Sort by count descending
    sorted_exts = sorted(extensions.items(), key=lambda x: x[1], reverse=True)
    
    for ext, count in sorted_exts:
        percentage = (count / total_files * 100) if total_files > 0 else 0
        print(f"{ext:8} {count:4} files ({percentage:.1f}%)")
    
    print(f"\n📈 Total files: {total_files}")
    print(f"{'='*60}")

if __name__ == "__main__":
    # You can customize these options
    start_dir = "."  # Current directory
    # start_dir = "/path/to/your/manus/project"  # Or specify absolute path
    
    print_directory_structure(start_dir)
    print_summary(start_dir)
    
    # Additional info
    print(f"\n💡 Quick commands:")
    print(f"  Find HTML files: find . -name '*.html' | head -20")
    print(f"  Count files: find . -type f | wc -l")
    print(f"  Disk usage: du -sh .")