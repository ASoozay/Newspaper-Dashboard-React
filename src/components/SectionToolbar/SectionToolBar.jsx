import "./SectionToolbar.css";

function SectionToolbar({ searchPlaceholder, buttonText, onAddClick }) {
  return (
    <div className="section-toolbar">
      <label className="section-toolbar-search-wrapper">
        <svg
          aria-hidden="true"
          className="section-toolbar-search-icon"
          viewBox="0 0 20 20"
          fill="none"
        >
          <circle cx="8.75" cy="8.75" r="5.75" />
          <path d="m13 13 4 4" />
        </svg>
        <input
          className="section-toolbar-search"
          type="search"
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
        />
      </label>
      <button
        className="section-toolbar-add"
        type="button"
        onClick={onAddClick}
      >
        <svg
          aria-hidden="true"
          className="section-toolbar-add-icon"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M10 4v12M4 10h12" />
        </svg>
        <span>{buttonText}</span>
      </button>
    </div>
  );
}

export default SectionToolbar;