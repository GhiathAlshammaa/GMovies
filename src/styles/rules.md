# Here you find the Rules of writing style

# Adding new Style

    - Please read the Rules in the main file of every Folder carefully, to see if this is the right place for the new style.
    - When adding a new file, an import statement should be added in the same folder in the main file that has the suffix "-dir"
      Ex: (base folder has this main file "__base-dir.scss")

    - If you want to add a new partition folder to the Style section, add import statement refers to its main file in "main.scss"
        Example:
        - Step1: ( NewPartition folder has this main file "__NewPartition-dir.scss" )
        - Step2: ( @import 'NewPartition/__NewPartition-dir'; in "main.scss" file )

# Writing Rules

    - Two (2) spaces indents, no tabs
    - Single line whitespace between rules
    - No more than 2 levels of nesting
    - Structure for each element is as follows:
    - Style the element itself
    - Style the element’s variants, modifiers, and states
    - Styles the element’s descendants (i.e. children)

# Commenting

    - CSS rules that aren’t obvious should be commented
    - C-style comments should be utilized for a large block of text
    - Inline comments should be utilized for single line comments
    - No comments should appear in a production environment – All CSS should be minified, stripping comments in the process, before being deployed.
