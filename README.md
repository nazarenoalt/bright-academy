# bright-academy

Bright Academy is an education platform made for students who can't be phisically in the classroom, so they can watch the virtual version of the class. This site is made thinking for being easy and understandable for all ages

---

## Technology used

- React
- Styled Components
- Quill
- React Router

## File structure

- assets
  - icons
  - images
- components
  - [dir-component] (each component has is own dir)
    - index.js
    - component.css.js (styled-components file)
- context
  - [dir-specific-context] (each context has his own dir)
    - specificContext.js
    - specificState.js
    - specificReducer.js
    - useSpecificContext.js
      (The files which will appear depends of what we will need, these are some examples.)
- hooks
  - useSomeHook.js
- pages
  - [dir-page-component]
    - index.js
    - component.css.js (styled-components file)
- utils (here goes... utils... and that logic we could need
- App.js
- GlobalStyle.css.js (styled-components global style file)
- index.js
- ...Rest of files & dir
