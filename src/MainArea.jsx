export const MainArea = ({ showText, fontSize }) => {
  return (
    <div
      id="textbereich"
      style={{
        display: showText ? "block" : "none",
        fontSize: `${fontSize}px`,
      }}
    >
      <p>
        Das ist meine Website. Was im Moment funktioniert, ist das Ein- und
        Ausblenden des Texts sowie das Ändern der Schriftgröße.
      </p>
    </div>
  );
};
