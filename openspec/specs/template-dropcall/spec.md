# Template: Dropcall (Dropdown Component)

## Purpose

Recreation of ColorLib **Dropdown 12** — a wide two-column Bootstrap dropdown
snippet with icon-labeled items.
Preview: https://preview.colorlib.com/theme/bootstrap/dropdown-12/
Source page: https://colorlib.com/wp/template/dropdown-12/
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Description: A dropdown button ("Privacy Settings" + cog icon) that opens a wide
two-column menu. Each column contains two items, each with a purple icon, bold
title, and description paragraph. The menu is horizontally centered under the
button and animates in with opacity + margin transition.

## Design Tokens

Extracted from the preview CSS (css/style.css + Bootstrap):

- **Font family (body/headings):** "Roboto", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif
- **Additional fonts loaded:** Poppins (300/400/500), Source Serif Pro (400/600)
- **Text color (default):** #888
- **Text color (hover/active button):** #000
- **Paragraph color:** #b3b3b3, font-weight 300
- **Icon color:** #c3a1fa (light purple)
- **Item title color:** #000, font-size 16px, letter-spacing .05rem
- **Item description color:** #b3b3b3, font-size 14px
- **Item border-bottom:** 1px solid #efefef (between items in a column)
- **Column padding:** 20px
- **Column width:** 50% (two equal columns)
- **Menu min-width:** 700px
- **Menu centering:** left 50% + translateX(-50%)
- **Menu shadow:** 0 15px 30px 0 rgba(0, 0, 0, 0.2)
- **Menu margin-top (closed):** 40px (opacity 0, visibility hidden)
- **Menu margin-top (open):** 50px (opacity 1, visibility visible)
- **Transition:** 0.3s all ease
- **Content padding:** 7rem 0
- **Heading font-size:** 20px (h2)
- **Dropdown link:** color #888, font-size 14px, padding 4px 7px
- **Background:** white (default body)

## Requirements

### Requirement: Dropdown renders with button and toggle behavior

The dropdown component SHALL render a button that toggles a wide two-column menu.

#### Scenario: Renders the dropdown button

- **WHEN** the page loads
- **THEN** a button labeled "Privacy Settings" is visible
- **AND** the button has a cog icon to the left of the label

#### Scenario: Dropdown menu is hidden by default

- **WHEN** the page loads
- **THEN** the dropdown menu is not visible

#### Scenario: Opens wide two-column menu on click

- **WHEN** the user clicks the "Privacy Settings" button
- **THEN** the dropdown menu becomes visible
- **AND** the menu has two columns side by side

#### Scenario: Closes menu on second click

- **WHEN** the user clicks the "Privacy Settings" button while the menu is open
- **THEN** the dropdown menu becomes hidden

#### Scenario: Closes on outside click

- **WHEN** the user clicks outside the dropdown while the menu is open
- **THEN** the dropdown menu becomes hidden

### Requirement: Menu items are correctly structured

The dropdown menu SHALL display four items across two columns with purple icons, bold titles, descriptions, and separating borders.

#### Scenario: Menu contains correct items

- **WHEN** the dropdown menu is open
- **THEN** column 1 contains "Settings" with a cog icon and description
- **AND** column 1 contains "Account" with a person icon and description
- **AND** column 2 contains "Settings" with a cog icon and description
- **AND** column 2 contains "Notification" with a person icon and description

#### Scenario: Items have purple icons

- **WHEN** the dropdown menu is open
- **THEN** all menu item icons are colored #c3a1fa (light purple)

#### Scenario: Items have descriptions

- **WHEN** the dropdown menu is open
- **THEN** each menu item shows a title (bold, 16px, black)
- **AND** each menu item shows a description paragraph (14px, #b3b3b3)

#### Scenario: Items separated by borders

- **WHEN** the dropdown menu is open
- **THEN** each item in a column has a bottom border (#efefef)
- **AND** the last item in each column has no bottom border

### Requirement: Menu is styled and animated

The dropdown menu SHALL be horizontally centered under the button and animate in with opacity and margin transitions.

#### Scenario: Menu is horizontally centered

- **WHEN** the dropdown menu opens
- **THEN** the menu is centered horizontally under the button

#### Scenario: Menu animation

- **WHEN** the dropdown menu opens
- **THEN** the menu fades in with opacity transition (0.3s)
- **AND** the menu slides down with margin-top transition (40px to 50px)

### Requirement: Accessibility and footer

The dropdown SHALL use proper ARIA attributes and the page SHALL include a footer linking to Component Dock.

#### Scenario: Accessibility

- **WHEN** the dropdown button renders
- **THEN** the button has aria-haspopup="true"
- **AND** the button has aria-expanded="false" when closed
- **AND** the button has aria-expanded="true" when open

#### Scenario: Footer with Component Dock link

- **WHEN** the page renders
- **THEN** a footer is visible
- **AND** the footer contains a link to "https://www.componentdock.com/"

#### Scenario: Heading displays correctly

- **WHEN** the page loads
- **THEN** a centered heading "Dropdown #2" is visible

## Verification Checklist

- [ ] Heading "Dropdown #2" centered on page
- [ ] "Privacy Settings" button with cog icon renders
- [ ] Click toggles dropdown open/close
- [ ] Menu is wide (min-width 700px) with two columns
- [ ] Column 1: Settings (cog), Account (person) with descriptions
- [ ] Column 2: Settings (cog), Notification (person) with descriptions
- [ ] Icons colored #c3a1fa
- [ ] Item titles: 16px, bold, #000, letter-spacing .05rem
- [ ] Item descriptions: 14px, #b3b3b3
- [ ] Items separated by 1px #efefef borders
- [ ] Menu centered with translateX(-50%)
- [ ] Menu shadow: 0 15px 30px 0 rgba(0,0,0,0.2)
- [ ] Menu animates in (opacity + margin-top)
- [ ] Outside click closes dropdown
- [ ] aria-expanded toggles correctly
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Vitest + Testing Library tests at 100% coverage
