import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  WowBadge,
  WowButton,
  WowCheckbox,
  WowIconButton,
  WowInput,
  WowList,
  WowMediaFrame,
  WowNav,
  WowPage,
  WowPanel,
  WowPost,
  WowSelect,
  WowTabs,
  WowThemeProvider,
  WowToggle,
  WowTooltip,
  type WowLayoutVariant,
  type WowTheme
} from "../lib";
import "./demo.css";

const navItems = ["News", "Guides", "Raids", "Media", "Forums", "Links"];

function Sidebar() {
  return (
    <>
      <WowPanel.Root>
        <WowPanel.Title>Poll</WowPanel.Title>
        <WowPanel.Body>
          <WowCheckbox label="Icecrown Citadel" defaultChecked />
          <WowCheckbox label="Ulduar" />
        </WowPanel.Body>
      </WowPanel.Root>
      <WowPanel.Root>
        <WowPanel.Title>Features</WowPanel.Title>
        <WowPanel.Body>
          <WowList.Root>
            <WowList.Item>Raid calendar</WowList.Item>
            <WowList.Item>Class guides</WowList.Item>
            <WowList.Item>Screenshot archive</WowList.Item>
          </WowList.Root>
        </WowPanel.Body>
      </WowPanel.Root>
    </>
  );
}

function DemoApp() {
  const [theme, setTheme] = useState<WowTheme>("frost");
  const [variant, setVariant] = useState<WowLayoutVariant>("three-column");
  const [customHeader, setCustomHeader] = useState(false);

  return (
    <WowThemeProvider
      theme={theme}
      assets={customHeader ? { headerImage: "/wow-kit/wow_header.jpg" } : undefined}
    >
      <div className="demo-toolbar">
        <WowSelect
          label="Theme"
          value={theme}
          onChange={(event) => setTheme(event.target.value as WowTheme)}
        >
          <option value="classic">Classic parchment</option>
          <option value="frost">Frost metal</option>
          <option value="horde">Red burlap</option>
        </WowSelect>
        <WowSelect
          label="Layout"
          value={variant}
          onChange={(event) => setVariant(event.target.value as WowLayoutVariant)}
        >
          <option value="three-column">Three column</option>
          <option value="two-column">Two column</option>
          <option value="horizontal">Horizontal nav</option>
        </WowSelect>
        <WowToggle
          label="Classic header asset"
          checked={customHeader}
          onChange={(event) => setCustomHeader(event.target.checked)}
        />
      </div>

      <WowPage.Root>
        <WowPage.Edge>
          <WowPage.Shell>
            <WowPage.Header title="World of Warcraft Fansite Kit" />
            <WowPage.Main variant={variant}>
              <WowPage.NavColumn>
                <WowNav.Root orientation={variant === "horizontal" ? "horizontal" : "vertical"}>
                  {navItems.map((item, index) => (
                    <WowNav.Item key={item} href="#" active={index === 0}>
                      {item}
                    </WowNav.Item>
                  ))}
                </WowNav.Root>
              </WowPage.NavColumn>

              <WowPage.Content>
                <WowPost.DateBreak>News for 01/02/07</WowPost.DateBreak>
                <WowPost.Root>
                  <WowPost.Title>Granular Component Pass</WowPost.Title>
                  <WowPost.Body>
                    <p>
                      The fan-site art is now exposed through smaller page, content, navigation,
                      list, panel, and control primitives.
                    </p>
                    <WowList.Root>
                      <WowList.Item>Compound namespaces for page and content sections</WowList.Item>
                      <WowList.Item>Core controls styled with kit textures</WowList.Item>
                      <WowList.Item>Named themes with optional asset overrides</WowList.Item>
                    </WowList.Root>
                  </WowPost.Body>
                  <WowPost.Meta
                    author="Posted by: Author"
                    time={<WowPost.Time dateTime="2007-01-02T13:00:00">1:00 PM 01/02/07</WowPost.Time>}
                  />
                </WowPost.Root>

                <WowTabs.Root defaultValue="controls">
                  <WowTabs.List>
                    <WowTabs.Trigger value="controls">Controls</WowTabs.Trigger>
                    <WowTabs.Trigger value="media">Media</WowTabs.Trigger>
                    <WowTabs.Trigger value="forms">Forms</WowTabs.Trigger>
                  </WowTabs.List>
                  <WowTabs.Panel value="controls">
                    <WowPanel.Root>
                      <WowPanel.Title>Core Controls</WowPanel.Title>
                      <WowPanel.Body>
                        <div className="demo-control-row">
                          <WowButton>Primary</WowButton>
                          <WowButton variant="secondary">Secondary</WowButton>
                          <WowButton variant="ghost">Ghost</WowButton>
                          <WowButton variant="danger">Danger</WowButton>
                          <WowIconButton label="Search">?</WowIconButton>
                          <WowBadge>Featured</WowBadge>
                        </div>
                      </WowPanel.Body>
                    </WowPanel.Root>
                  </WowTabs.Panel>
                  <WowTabs.Panel value="media">
                    <WowMediaFrame>
                      <img src="/wow-kit/wotlk_header.jpg" alt="Fan-site header artwork" />
                    </WowMediaFrame>
                  </WowTabs.Panel>
                  <WowTabs.Panel value="forms">
                    <WowPanel.Root>
                      <WowPanel.Title>Form Controls</WowPanel.Title>
                      <WowPanel.Body>
                        <div className="demo-form-grid">
                          <WowInput label="Character" placeholder="Name" />
                          <WowSelect label="Role" defaultValue="tank">
                            <option value="tank">Tank</option>
                            <option value="healer">Healer</option>
                            <option value="damage">Damage</option>
                          </WowSelect>
                          <WowTooltip content="Tooltips are dependency-free and CSS-driven.">
                            <WowButton>Hover tip</WowButton>
                          </WowTooltip>
                        </div>
                      </WowPanel.Body>
                    </WowPanel.Root>
                  </WowTabs.Panel>
                </WowTabs.Root>
              </WowPage.Content>

              {variant === "three-column" ? (
                <WowPage.Sidebar>
                  <Sidebar />
                </WowPage.Sidebar>
              ) : null}
            </WowPage.Main>

            {variant !== "three-column" ? (
              <section className="demo-below-content">
                <Sidebar />
              </section>
            ) : null}

            <WowPage.Footer>
              <nav className="demo-footer-links">
                <a href="#">About</a> | <a href="#">Contact</a> | <a href="#">Community</a>
              </nav>
              <small>
                World of Warcraft and Blizzard Entertainment are trademarks or registered
                trademarks of Blizzard Entertainment. This fan site is not associated with or
                endorsed by Blizzard Entertainment.
              </small>
            </WowPage.Footer>
          </WowPage.Shell>
        </WowPage.Edge>
      </WowPage.Root>
    </WowThemeProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DemoApp />
  </StrictMode>
);
