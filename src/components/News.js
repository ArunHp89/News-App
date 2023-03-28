import React from 'react';
import { useEffect , useState} from 'react';
import ReactPaginate from 'react-paginate';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function News() {
  const [newData , setNewData]=useState();
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d1c20dd4b12d4010ad7d3cdd1f365ec8')
      .then(res => res.json())
      .then(data => setNewData(data))
  }, [])

  
  return (
<section className='max-w-[1300px] mx-auto'>
<div className='flex flex-wrap'>
<div className='flex flex-wrap w-4/6'>

  {newData!==undefined? (newData?.articles.map((item , i )=>{
    return(<div key={i} className='w-1/3 px-4 my-4 flex'>
      <div className='border'>
  {item?.urlToImage===null?(<div className='h-40 w-full flex justify-center items-center bg-gray-400'><marquee>No Image</marquee></div>):  <figure className='overflow-hidden
  h-40'>
   <a a href={item?.url} target='_blank'> <img className='w-full h-40 object-cover hover:scale-150  transition-all' src={item?.urlToImage} alt="break image" /></a>
    </figure>}
    <div className='p-4'>
    <div className='flex flex-wrap'>
<div className='w-full mt-2'><p>Author: <i>{item?.author}</i></p> </div>
<div className='w-full mt-2'><p>publishedAt: <i>{item?.publishedAt}</i></p> </div>
      </div>
    <h2 className='font-sans text-blue-700 font-semibold text-xl my-3'>
      {item?.title}
    </h2>
    <p className='text-base text-black line-clamp-4'>
        {item?.description}
    </p>
    < a href={item?.url} target='_blank' className='bg-blue-700 hover:scale-105 transition-all hover:bg-black text-white text-base inline-block px-5 py-1 rounded-3xl mt-5' >Read More</a>
  </div>  </div></div>);
  })):
  <div className='flex flex-wrap loading data w-full'>
   
  
      <div  className='w-1/3 px-4 my-4 flex'>
      <div className='border w-full'>
   <figure className='overflow-hidden
  h-40'>
    </figure>
    <div className='p-4'>
    <div className='flex flex-wrap'>
<div className='w-full mt-2'><p></p> </div>
<div className='w-full mt-2'><p></p> </div>
      </div>
    <h2 className='font-sans text-blue-700 font-semibold text-xl my-3'>
     
    </h2>
    <p className='text-base text-black line-clamp-4'>
       
    </p>
    < a  target='_blank' className='bg-blue-700 hover:scale-105 transition-all hover:bg-black text-white text-base inline-block px-5 py-1 rounded-3xl mt-5' ></a>
  </div>  </div></div>
  <div  className='w-1/3 px-4 my-4 flex'>
      <div className='border w-full'>
   <figure className='overflow-hidden
  h-40'>
    </figure>
    <div className='p-4'>
    <div className='flex flex-wrap'>
<div className='w-full mt-2'><p></p> </div>
<div className='w-full mt-2'><p></p> </div>
      </div>
    <h2 className='font-sans text-blue-700 font-semibold text-xl my-3'>
     
    </h2>
    <p className='text-base text-black line-clamp-4'>
       
    </p>
    < a  target='_blank' className='bg-blue-700 hover:scale-105 transition-all hover:bg-black text-white text-base inline-block px-5 py-1 rounded-3xl mt-5' ></a>
  </div>  </div></div>
  <div  className='w-1/3 px-4 my-4 flex'>
      <div className='border w-full'>
   <figure className='overflow-hidden
  h-40'>
    </figure>
    <div className='p-4'>
    <div className='flex flex-wrap'>
<div className='w-full mt-2'><p></p> </div>
<div className='w-full mt-2'><p></p> </div>
      </div>
    <h2 className='font-sans text-blue-700 font-semibold text-xl my-3'>
     
    </h2>
    <p className='text-base text-black line-clamp-4'>
       
    </p>
    < a  target='_blank' className='bg-blue-700 hover:scale-105 transition-all hover:bg-black text-white text-base inline-block px-5 py-1 rounded-3xl mt-5' ></a>
  </div>  </div></div>
  <div  className='w-1/3 px-4 my-4 flex'>
      <div className='border w-full'>
   <figure className='overflow-hidden
  h-40'>
    </figure>
    <div className='p-4'>
    <div className='flex flex-wrap'>
<div className='w-full mt-2'><p></p> </div>
<div className='w-full mt-2'><p></p> </div>
      </div>
    <h2 className='font-sans text-blue-700 font-semibold text-xl my-3'>
     
    </h2>
    <p className='text-base text-black line-clamp-4'>
       
    </p>
    < a  target='_blank' className='bg-blue-700 hover:scale-105 transition-all hover:bg-black text-white text-base inline-block px-5 py-1 rounded-3xl mt-5' ></a>
  </div>  </div></div>
  <div  className='w-1/3 px-4 my-4 flex'>
      <div className='border w-full'>
   <figure className='overflow-hidden
  h-40'>
    </figure>
    <div className='p-4'>
    <div className='flex flex-wrap'>
<div className='w-full mt-2'><p></p> </div>
<div className='w-full mt-2'><p></p> </div>
      </div>
    <h2 className='font-sans text-blue-700 font-semibold text-xl my-3'>
     
    </h2>
    <p className='text-base text-black line-clamp-4'>
       
    </p>
    < a  target='_blank' className='bg-blue-700 hover:scale-105 transition-all hover:bg-black text-white text-base inline-block px-5 py-1 rounded-3xl mt-5' ></a>
  </div>  </div></div>
  <div  className='w-1/3 px-4 my-4 flex'>
      <div className='border w-full'>
   <figure className='overflow-hidden
  h-40'>
    </figure>
    <div className='p-4'>
    <div className='flex flex-wrap'>
<div className='w-full mt-2'><p></p> </div>
<div className='w-full mt-2'><p></p> </div>
      </div>
    <h2 className='font-sans text-blue-700 font-semibold text-xl my-3'>
     
    </h2>
    <p className='text-base text-black line-clamp-4'>
       
    </p>
    < a  target='_blank' className='bg-blue-700 hover:scale-105 transition-all hover:bg-black text-white text-base inline-block px-5 py-1 rounded-3xl mt-5' ></a>
  </div>  </div></div>
  <div  className='w-1/3 px-4 my-4 flex'>
      <div className='border w-full'>
   <figure className='overflow-hidden
  h-40'>
    </figure>
    <div className='p-4'>
    <div className='flex flex-wrap'>
<div className='w-full mt-2'><p></p> </div>
<div className='w-full mt-2'><p></p> </div>
      </div>
    <h2 className='font-sans text-blue-700 font-semibold text-xl my-3'>
     
    </h2>
    <p className='text-base text-black line-clamp-4'>
       
    </p>
    < a  target='_blank' className='bg-blue-700 hover:scale-105 transition-all hover:bg-black text-white text-base inline-block px-5 py-1 rounded-3xl mt-5' ></a>
  </div>  </div></div>
  <div  className='w-1/3 px-4 my-4 flex'>
      <div className='border w-full'>
   <figure className='overflow-hidden h-40'>
    </figure>
    <div className='p-4'>
    <div className='flex flex-wrap'>
<div className='w-full mt-2'><p></p> </div>
<div className='w-full mt-2'><p></p> </div>
      </div>
    <h2 className='font-sans text-blue-700 font-semibold text-xl my-3'>
     
    </h2>
    <p className='text-base text-black line-clamp-4'>
       
    </p>
    < a  target='_blank' className='bg-blue-700 hover:scale-105 transition-all hover:bg-black text-white text-base inline-block px-5 py-1 rounded-3xl mt-5' ></a>
  </div>  </div></div>
  <div  className='w-1/3 px-4 my-4 flex'>
      <div className='border w-full'>
   <figure className='overflow-hidden
  h-40'>
    </figure>
    <div className='p-4'>
    <div className='flex flex-wrap'>
<div className='w-full mt-2'><p></p> </div>
<div className='w-full mt-2'><p></p> </div>
      </div>
    <h2 className='font-sans text-blue-700 font-semibold text-xl my-3'>
     
    </h2>
    <p className='text-base text-black line-clamp-4'>
       
    </p>
    < a  target='_blank' className='bg-blue-700 hover:scale-105 transition-all hover:bg-black text-white text-base inline-block px-5 py-1 rounded-3xl mt-5' ></a>
  </div>  </div></div>


    </div>
  }

</div>
<div className='w-2/6 relative my-4'>

<div className='w-full sticky top-4'> 
  <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form className='shadow-md bg-white p-8 border rounded-md text-center'>
          <h1 className='mb-4 text-center text-2xl font-bold'>Get In Touch</h1>
          <label className='text-left font-semibold block mb-1'>Email</label>
           <Field className="border p-3 w-full h-7 mb-4" type="email" name="email" />
           <ErrorMessage className='text-red-600' name="email" component="div" />
           <label  className='text-left font-semibold block mb-1'>password</label>
           <Field className="border p-3 w-full h-7 mb-4" type="password" name="password" />
           <ErrorMessage className='text-red-600' name="password" component="div" />
           <button className='bg-green-600 px-4 h-8 rounded-md text-white' type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
  </div>
</div>
</div>
</section>
  )
}
