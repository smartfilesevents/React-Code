export const Header = ({ toggleText, fontSize, changeSize }) => {
  return (
    <div className="Header">
      <header className="header">
        <div className="logo-text">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAA3NCSVQICAjb4U/gAAAAX3pUWHRSYXcgcHJvZmlsZSB0eXBlIEFQUDEAAAiZ40pPzUstykxWKCjKT8vMSeVSAANjEy4TSxNLo0QDAwMLAwgwNDAwNgSSRkC2OVQo0QAFmBqYWZoZmxmaAzGIzwUASLYUyTrUQzIAAAOLSURBVFiF7ZZNSFxXFMfP+5iPp80w0mDbWFtpmI00kEZpQyvFRaGlLrpopQ0umkA7qJEWutCKIHTVIhamqAt1WRGmBMUEFSHSNmonMY7vJaVEMzMaRzHP6WDffLx5776Pe7p4IbS0ST+0ZNH3X1wO55x7fufA5d7LICI8CrGPhOqCXbALdsEu+J+IP8Ra3y4YW2lb3oNPPxH+OhsPSV9HLVFSETF1x3Q8+wqVbpIH5f97cCqV+l0hKN7jXQ5rmUQuTz/8iCxfLx0+uLOz0zEMA6MT1nvntCtLOiJSojj+5nMapdaDtvOGYXR3d/t8vqamJp7nE4nE/Px8OByenp72er29vb3j4+OiKAaDwZ6enomJCUppJpNpaGgYHh6uqalpa2vzeKgs2+c/sF+s996VceNO2SunQSdw7KjFMH4A2JVpXCRVT/GnTnquLOlbaeb11ziIRqM7OzuIaJrm5OTk6uoqItbW1iLi0NBQoVBQVRURZ2Zmtre3I5HI+vq603JXV9f99uvfIIQYP2fNzz4vXb1WQsSry/bCUgkRxR/tuFhI7+A3F4ozc/bGpp7L23dlwjY2Nra3t8/OzvI8j4hVVVWU0paWFgDw+/0Mw+Tz+ZGRkYuXLlqWhYihUMg5lZZl3TNsyP5ieL2eo4/zuQJbV+cBgEtzVt0pDhFaOzWW8y3+UGh+u+zE8/hcCMvK4MknvGxlZeXU1FQoFOro6BAEAREBgFIKAAzDKIrS398fDofPvn/WcTrrb5VI0t7zrNOBhzN5jgeA1KYh+L1xkbaegZMn2DPNRwCYp49x15e51o8JALDJZJIQUl1dbdu2bdsOmBACALZtE0KCwSAAjI2NIeL9KQFAURTHiIv48ksMAMSu0Wequc0tbe02Hn+W/+lWyTSB4znD5L5fVHdl3MtY9S949vMWAEA2m41EIgMDA7qur62tFQoFSmksFkNESZIsy4rFYn19fel0enR0VJIkpzlEXFlZGRwcRMRX31IRbUT8boFIN1REjIvGUqyIiKaFX3ypzV1WEVHeo/1fadELqqaZiMjgwb63uzIsLBbffeexP4ay2SwAlpd7SyWd43y6XmIYOxAICsIROMhdndywTr9ZvHHzz6kAUCwWTdOS5X1NM9PptK4bHk95Lqc60YNO/BApiiIIgmEYuq4HAgFCCMuypmlWVFT8t+CH6//3HrtgF+yCXbAL/tv6FdiCReq7GGYHAAAAAElFTkSuQmCC"
            alt="Logo"
          />
          <span>Home of Web-Header</span>
        </div>

        <div className="toolbar">
          <button onClick={toggleText}>Text ein-/ausblenden</button>
          <label htmlFor="sizeRange">Schriftgröße:</label>
          <input
            type="range"
            id="sizeRange"
            min="14"
            max="40"
            value={fontSize}
            onChange={changeSize}
          />
        </div>
      </header>
    </div>
  );
};
