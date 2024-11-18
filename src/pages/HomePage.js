import { load } from '@tensorflow-models/qna';
import * as tf from '@tensorflow/tfjs';
import { useEffect } from 'react';

function HomePage() {
    const answers = async () => {
        // Khởi tạo backend
        await tf.setBackend('webgl'); // Hoặc dùng 'cpu' nếu gặp vấn đề với 'webgl'
        await tf.ready(); // Đảm bảo backend đã sẵn sàng

        const question = "who are you?";
        const passage = "Hello, my name is Le Ngoc Loc. I am currently a student majoring in Information Technology, specializing in web programming and web application development with technologies like React, MongoDB, JavaScript, Next.js, HTML, and CSS. I am passionate about learning and improving my skills in programming, constantly working to develop high-quality products that enhance user experience. In addition, I’m eager to explore new technologies and work on exciting projects where I can apply my knowledge in real-world situations and contribute to the programming community.";

        // Tải mô hình và tìm câu trả lời
        const model = await load();
        const answers = await model.findAnswers(question, passage);

        console.log('Answers: ');
        console.log(answers);
    }

    return (
        <>
            <button className="text-red-500" onClick={answers}>Button</button>
        </>
    )
}

export default HomePage;
