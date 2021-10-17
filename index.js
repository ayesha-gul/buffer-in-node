
 
 let buf = Buffer.alloc(10);
 buf.write("hello");
 console.log(buf);

   let buf2 = Buffer.from("welcome");
   console.log(buf2);
   console.log(buf2.toJSON());