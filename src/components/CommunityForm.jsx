import QuillEditor from "./QuillEditor";
function CommunityForm() {
  return (
    <div>
      <div>
        <label htmlFor="">제목</label>
        <input type="text" />
      </div>
      <div>
        <label>본문</label>
        <QuillEditor />
      </div>
    </div>
  );
}

export default CommunityForm;
