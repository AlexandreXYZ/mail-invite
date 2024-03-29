'use client'

import HtmlEditor from "@/components/HtmlEditor";
import { mailSender } from "@/services/mailSender";
import { useState } from "react";

export default function Home() {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('<div></div>');

  const onSend = async () => {
    mailSender({ subject, email, content }).then((res: Response) => {
      console.log(res);
    });
  };

  return (
    <div className="pt-4">
      <div className="w-[400px]">
        <input className="w-full p-2 mb-2 outline-blue-500 focus:outline focus:outline-4 border border-black" type='text' placeholder='Titulo' value={subject} onChange={(e) => setSubject(e.target.value)} />
        <input className="w-full p-2 mb-2 outline-blue-500 focus:outline focus:outline-4 border border-black" type='email' placeholder='Exemplo@exemplo.com' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <HtmlEditor value={content} onChange={(e: any) => setContent(e)} />
      <button className="mt-4 mx-auto block bg-[blue] w-[200px] text-white rounded-md text-primary p-2 outline-blue-500 focus:outline focus:outline-4 font-medium active:bg-blue-500 active:text-white" onClick={onSend}>Enviar</button>
    </div>
  )
}
