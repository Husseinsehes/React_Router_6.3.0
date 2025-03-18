//كومب بعرض فيه تفاصيل البوست عند النقر عليه من صفحة البوستات بتمرير البروبس الtitle وال body والاهم
// هو تمرير الid الخاص بالبوست اللي انضغط عليه عشان يعرض تفاصيله هو فقط  من خلال استخدام الهوك
//ال useParans  وهناك في ال App عند استدغاء كومب صفحة البوستتس مررت بجانب الpath بهد اسم الصفحة كتلميح او شي يدل علي ال id بحيث عند عند التحول لصفحة التفاصيل
//ينم التحول لهرض تفاصيل البوست المتضغط عليه من خلال ال id بتاعه
import { useParams ,Link} from "react-router-dom";
import { postContext } from "./Postcontext.js";
import { useContext } from "react";
//import Posts from "./Posts.js";


export default function Postdetails() {
  const posts = useContext(postContext);

  const {postId} = useParams(); //حصلنا علي id اللي جاي في الرابط

  // اوحد بالمرور علي القايمة بتاعة اليوكونتكسن وهات منها الid وتحقق لو بيساوي الid.اللي جاي في الرابط عند النقر علي عنوان البوست وتحويله لصفحة التفاصيل ومعه الid بتاعه
  //ملحوظة يجب تحويل الاي دي اللي جاي من اليوزبارامز الي رقم لانه اليدي اللي في المصفوفوة رقم فلابد المقارنة تتم مع رقم زي لانه اللي جاي نناليوز بارامز هو سترينج 
  const post = posts.find((p) => {
    return p.id === Number(postId);
  });

  //تاكد الاول لو كان البوست موجود اصلا اللي بيحاول يوصله المستهدم
  //من خلال كتابة اي دي في ال url مثلا  لو فيه id موجود فعلا مطابق للي كتبه في الurl في صغحة التفاصيل رجعلي الاتي والا قوله لا يوجد id ينتمي او لايوجد بوست ينتمي لهذا الادي دي
 if(!post){
  return (
    <>
    <h1>post not found</h1> 
    <Link to="/posts">
     <h3>back to posts </h3>
    </Link>
    </>
  )
 }   
  return(
      <>
        <h1>post details page</h1>
        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
 
        <Link to="/posts">
           <h2>back to posts</h2>
        </Link>
      </>
  );

     
}
