import React from "react";
import { AuthProvider } from "./components/auth";
import { Route, Routes } from "react-router-dom"; // Routes , Route
import { Home } from "./components/Home";
import { NavigationBar } from "./components/NavigationBar";
import { NextPage } from "./components/NextPage";
import { NotMatch } from "./components/NotMatch";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import { Profile } from "./components/Profile";
import Login from "./components/Login";

import { Link } from "react-router-dom";
import Contact from "./New/Contact";
import Posts from "./New/Posts";
import LayoutPosts from "./New/Layoutposts";
import Postdetails from "./New/Postdetails";
import { postContext } from "./New/Postcontext";//استيراد ملف انشاء الكونتكست لامداد الكود كله بقيمة القايمة 
import NewPost from "./New/Newpost";
import DeletePost from "./New/Deletepost";

import "./App.css";
//استيراد الaboit داخل فنك ال lazy والتي ستقلل وقت تحميل الصفحة دي لانها كبيرة فيها براجراف كبير 
const LazyAbout = React.lazy(() => import("./components/About"));
function App() {

  //  جعل تلك المصغوفة جلوبال للوصول اليها من اي صفحة وجعل التنقل او اخذ القبمة اكثر ديناميك باستخدتم ال useContext
  const listPosts=[
   {id:1, title:"post1" ,body:"welcome to post one"},
   {id:2, title:"post2" ,body:"welcome to post two"},
   {id:3, title:"post3" ,body:"welcome to post three"},
          ]
//عمل بروڤايدر اسفل الاول عادي ليكون مزود خاص لصفحات اخري وهي البةستس الposts      
  return (
    <AuthProvider>
      <postContext.Provider value={listPosts}>

      <NavigationBar />
            <Link to="/contact">
             <button>contact</button>
            </Link>

            <Link to="/posts">
            <button>posts</button>
            </Link>  



      <Routes>
        <Route path="/" element={<Home />} />
       {/*هنا في صفحة الabout وضعتها بين وسم خاصية ال 
             suuspese عشان اعرف رياكت ان الصفحة اللي فيها المشكلة صفحة الابوت دي وبضع المتغير اللي استوردت فيه الصفحة ب laxy مابين الsuspense كا كومبوننت 
                   وممكن تضع اتربيوت يدل ع التحميل جاري لو حصل لاي سبب انقطع الانترنت او كان بطيي وهي fallback بداخل اولةوسم لل suspense*/}
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="nextPage" element={<NextPage />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="features" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotMatch />} />
      {/* =========================================*/}
        <Route path="/contact" element={<Contact/>} />
      {/*الصفحات المتداخلة المرتبطة مع بعضها بهصوص البوستات*/}
           {/*داخل غلاف واحد كاب ومحدد له برفكس او بداية موحدة لكل الروابط باسم posts كل الصفحات تبدا بها واللي هتكون الصغحة مصادفة بنفس الاسم هوضع مطان الباث اتربيوت index وواخد ترو افتراضي  وبعد كده اي صفحة هتكبها هكتبها مباشرة دون سلاش فقط الاسم لان فيه برفكس محدد للكل قبلها * وصفحة التفاصيل هكتب فقط ال يعني بقوله لو تم النقر علي البوست صحاب الاي دي روح لصفحة التفاصيل ولو تم النقر او كتابة نيو في اليوارال او النقر علي زرها روح لصفحة الاضافة وهكذاiD والكولون 
                ومعني وضع اي دي ففط يعني بقوله لو كتب في اليurl رفم اي دي بتاع اي بوست حوله لصفحة التفاصيل ولو كتب كلمة نيو حوله لثفحة ال Neepost وهكذا لانه وضعت في الelrement الكوكب اللي هيروحه
           */}
           {/*بمعني اصح المسار الرئيسي هو posts  يعرض مكون layout بداخله يتم عرض المسارات اللي تحته index والمسار الديناميكي iD لنقل الاي دي عند النقر وعرض البوست وتفاصيله بناء علي الId  وبهد كده مسار اضافة جديد وحذف  كلهم افتراضيا هنا يبدا ب /posts وبعدين اسم المستر delete مثلا بس هنا مش محتاج اكتب بوستس posts كل مرة معاهم فقط وضعتها كبريغكس في البداية  ولكن عند استخدام المسار كلينك في اي مكان بره الاب ده هتضع البريفكس /posts/new هكذا */}  
        <Route path="/posts" element={<LayoutPosts/>}>
           <Route index  element={<Posts />} />
           <Route path=":postId" element={<Postdetails/>} />
           <Route path="new" element={<NewPost/>} />
           <Route path="delete" element={<DeletePost/>} />
        </Route>


      </Routes>
{/*
      <hr></hr>
      <Link to="/contact">
       <button>contact</button>
      </Link>
      <Link to="/posts">
       <button>posts</button>
      </Link> */}
        </postContext.Provider> 
    {/* ===========================================*/}
    </AuthProvider>
  );
}

export default App;
