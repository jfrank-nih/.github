---
name: Component
about: This template defines a template for atomic component issues for the Design System.
title: "[Short Name]"
labels: component, documentation
---

### Build xxx component based on design specs/requirements documented in this ticket

> **ESTIMATE** TBD

### Variants Information
*Is there a USWDS variant?  If we are using it - include the names of the variants, and links to USWDS. If we are creating something new, provide links to what it is based off of in resources section*

* Related USWDS Links: *Here goes a URL to an existing web page*

### Invision Mockups: 
*Here goes a URL to or the name of the mockup(s) in inVision to include hex codes, etc.*
  * Desktop: *insert link here, or enter N/A if not needed*
  * Tablet: *insert link here, or N/A if not needed*
  * Mobile: *insert link here, or N/A if not needed*

### Notion Documentation *Additional background information for requirements*:
 *Here goes a URL to notion documentation*

### Notes
*Some complementary notes if necessary:*
* > Here goes a quote from an email
* Here goes whatever useful information can exist…

### Acceptance Criteria for Behaviors 
*If a component changes its between breakpoints, or things show/hide, that gets captured here* 

```gherkin
Scenario: [title]
  Given [context]
    And [some more context]
  When  [event]
  Then  [outcome]
    And [another outcome]
```

---

## Solution

### Prerequisites
- *required dependency for identifying the problem, scope and then solution for this issue*

- [ ] Short Spike Description - Issue #9999

### Tasks
- [ ] Update Documentation Site (docs)
  - [ ] Create or update [INSERT DOCUMENTATION PAGE OR SECTION ON PAGE HERE] that includes:
    - Developer Documentation
      -  What SASS partial to import
      - (HTML Tab) What is the HTML?
      - (HTML Tab) (for vanilla js) What is the js library to import?
      - (React Tab) What is the react library to import?
      - (React Tab) What is the react markup?
    - **IA Provided** Guidance Documentation  
      - Includes when/how the component should be used
  - [ ] If the component is a global component like the footer, then it needs to be added to the documentation site as well as a real usage.
- [ ] Update NCIDS-CSS
  - **Insert list here of partials to be created** (There should be a sass partial available for all variants that are being created in this ticket)
- [ ] Update NCIDS-JS
  - **Insert requirements/list of components for JS**
- [ ] Update NCIDS-React
  - [ ] **Insert requirements/list of components for react**
    - (it can also be a separate ticket, should be linked here)
