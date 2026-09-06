import { STORIES, STATUS_LABEL } from "@/content/katha";

export default function StorySources() {
  return (
    <div className="katha">
      <div className="katha-head">
        <span className="dot" aria-hidden />
        The story · where it actually comes from
      </div>
      {STORIES.map((s) => (
        <div className={`krow ks-${s.status}`} key={s.title}>
          <div className="kt">
            <div className="kt-title">{s.title}</div>
            <div className="kt-src">{s.source}</div>
          </div>
          <div className="kb">
            <span className="kstatus">{STATUS_LABEL[s.status]}</span>
            <p>{s.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
