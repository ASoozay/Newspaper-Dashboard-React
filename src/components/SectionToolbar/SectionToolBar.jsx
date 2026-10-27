import "./SectionToolbar.css";

function SectionToolbar({ searchPlaceholder, buttonText, onAddClick }) {
  return (
    <div className = "section-toolbar">
      <input className = "section-toolbar-search" type = "search" placeholder={searchPlaceholder}/>
      <button className = "section-toolbar-add" type = "button" onClick={onAddClick}>{buttonText}</button>
    </div>
  );
}

export default SectionToolbar;