// import React, { useState } from 'react';
// import styled from 'styled-components';

// export default function Input() {
//   const [hasSubmit, setHasSubmit] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleOnClick = async (e) => {
//     e.preventDefault();
//     setHasSubmit(true);
//     if (isLoading || !isEmailValidate) return;
//     setIsLoading(true);
//     const emailStatus = await checkEmail(email);
//     setIsLoading(false);
//   };

//   return (
//     <form onSubmit={handleOnClick}>
//       <p>登入/註冊</p>
//       <input placeholder='請輸入您的email' errorMessage={false}></input>
//     </form>
//   );
// }
