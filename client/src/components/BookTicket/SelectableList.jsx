// Define the SelectableList component
export default function SelectableList({ styles, title, items, selectedItem, onSelect }) {
    // Render the component
    return (
        <section className={styles.inputs}>
            {/* Display the title of the selectable list */}
            <h3 className={styles.input_title}>{title}</h3>

            {/* List of selectable items */}
            <ul className={styles.lists}>
                {/* Map through each item and render a list item */}
                {items.map((item) => (
                    <li
                        key={item}
                        className={`${styles.item} 
                        ${selectedItem === item ? styles.selected : ''}`}
                        onClick={() => onSelect(item)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                onSelect(item);
                            }
                        }}
                        tabIndex={0}
                        aria-current={selectedItem === item ? 'true' : 'false'}
                    >
                        {/* Display the item's name */}
                        <p>{item}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
