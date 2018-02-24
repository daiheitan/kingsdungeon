import '../assets/index.css'
import { MapGenerator, Size } from './MapGenerator'

interface MenuItem {
    id: string;
    label: string;
    action: (this: HTMLElement, e: Event) => any;
}

function generateMenu(items: MenuItem[], root: Element): void {
    for (let item of items) {
        root.appendChild(generateButton(item));
    }
}

function generateButton(item: MenuItem): Element {
    let button = document.createElement('span');
    button.className = 'dungeon-menu-item';
    button.innerHTML = item.label;
    button.id = item.id;
    button.onclick = item.action;
    return button;
}

function generateMap(): void {
    new MapGenerator(5, Size.Large);
}

function main(): void {
    const menuEl = document.getElementById('dungeon-menu');
    const menuList = [];
    menuList.push({
        label: '生成地图',
        id: 'generate',
        action: generateMap
    });
    generateMenu(menuList, menuEl);
}

main();