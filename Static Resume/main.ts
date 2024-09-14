// Get all the toggle headings
const toggleHeadings = document.querySelectorAll('.toggle-heading') as NodeListOf<HTMLHeadingElement>;

// Add event listener for each heading
toggleHeadings.forEach(heading => {
    heading.addEventListener('click', () => {
        // Get the target section ID from data attribute
        const targetId = heading.getAttribute('data-target');
        const section = document.getElementById(targetId as string) as HTMLElement;

        // Toggle the "expanded" class to collapse/uncollapse
        if (section.classList.contains('expanded')) {
            section.classList.remove('expanded');
        } else {
            section.classList.add('expanded');
        }
    });
});
