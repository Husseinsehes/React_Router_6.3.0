//صفحة ال Layoit الاي جواهت طل مايتعلق بالبوستات
//لانه غلفت كل اRoute بتاعة صفحات البوستات والصفحة الرييية لهم Post.js بها غتحدت كنسخه منهم فيها يهرضو من خلالها

import { Outlet } from "react-router-dom";

export default function LayoutPosts() {
  //الاول عنوان للصفحة كشريط  والثاني ديف  فيه ال Outlet ده اللي هيخرج الروابط كلها المرتبطة مع بعض
  return (
    <>
      <div>
        <h1> post</h1>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}
