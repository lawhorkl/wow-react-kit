# WoW React Kit

React component kit adapted from the local fan-site source in `original-fansite-web`.

The package turns the original HTML/CSS textures into granular, modern React primitives for MMO fan sites.

## Install And Import

```tsx
import {
  WowButton,
  WowNav,
  WowPage,
  WowPanel,
  WowPost,
  WowThemeProvider
} from "wow-react-kit";
import "wow-react-kit/styles.css";
```

Per-component CSS is also available:

```tsx
import "wow-react-kit/styles/themes.css";
import "wow-react-kit/styles/page.css";
import "wow-react-kit/styles/controls.css";
```

## Page Composition

```tsx
<WowThemeProvider theme="frost">
  <WowPage.Root>
    <WowPage.Edge>
      <WowPage.Shell>
        <WowPage.Header title="World of Warcraft Fansite" />
        <WowPage.Main variant="three-column">
          <WowPage.NavColumn>
            <WowNav.Root>
              <WowNav.Item href="#" active>News</WowNav.Item>
              <WowNav.Item href="#">Guides</WowNav.Item>
            </WowNav.Root>
          </WowPage.NavColumn>
          <WowPage.Content>
            <WowPost.Root>
              <WowPost.Title>Guild Dispatch</WowPost.Title>
              <WowPost.Body>
                <p>Your news content goes here.</p>
              </WowPost.Body>
            </WowPost.Root>
          </WowPage.Content>
          <WowPage.Sidebar>
            <WowPanel.Root>
              <WowPanel.Title>Poll</WowPanel.Title>
              <WowPanel.Body>Vote for the next raid.</WowPanel.Body>
            </WowPanel.Root>
          </WowPage.Sidebar>
        </WowPage.Main>
      </WowPage.Shell>
    </WowPage.Edge>
  </WowPage.Root>
</WowThemeProvider>
```

## Themes And Assets

Named themes:

- `classic`
- `frost`
- `horde`

Theme assets can be overridden globally through `WowThemeProvider` or per page through `WowPage.Root`:

```tsx
<WowThemeProvider
  theme="horde"
  assets={{
    headerImage: "/custom/header.jpg",
    panelTexture: "/custom/panel.jpg"
  }}
>
  <App />
</WowThemeProvider>
```

Supported asset slots are `pageBackground`, `edgeFrame`, `shellTexture`, `headerImage`, `buttonSprite`, `titleBar`, `panelTexture`, and `bulletImage`.

## Components

Content and layout:

- `WowPage.Root`, `WowPage.Edge`, `WowPage.Shell`, `WowPage.Header`, `WowPage.Main`, `WowPage.NavColumn`, `WowPage.Content`, `WowPage.Sidebar`, `WowPage.Footer`
- `WowNav.Root`, `WowNav.Group`, `WowNav.Item`
- `WowPost.Root`, `WowPost.Title`, `WowPost.DateBreak`, `WowPost.Body`, `WowPost.Meta`, `WowPost.Time`
- `WowPanel.Root`, `WowPanel.Title`, `WowPanel.Body`
- `WowList.Root`, `WowList.Item`

Controls:

- `WowButton`
- `WowIconButton`
- `WowBadge`
- `WowInput`
- `WowSelect`
- `WowCheckbox`
- `WowToggle`
- `WowTooltip`
- `WowMediaFrame`
- `WowTabs.Root`, `WowTabs.List`, `WowTabs.Trigger`, `WowTabs.Panel`

## Development

```bash
npm install
npm run dev
npm run typecheck
npm run build
```
