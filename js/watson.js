document.querySelector(".talk").onclick = () => {
    let token = "gtd1LgcO%2Ffo9oLqVNN9vMW9Nb30dkRouamS2Zf1Wg6SKaML5o22BVEDUOSsFAnb%2FaLeUz8J%2FfOrVu4W9HzqI8NLnNBUbNnefeexLuj0Dc1c8ODSWlnNZ33RoK%2Bgu4aIdf8O8Jyt2RLqc1GZWCBts0UPV1geRIwAgT17Y1uKO7I1ZRN0QujaZVFS9G%2BZLZjOiM%2Bktdv9w6s4lyBo549itop8g5FfsnnYlDnPBy8eNCjl7XUG7PZGd3UTprB9O1bDp28BkuCJkwBH88r8mx9TNGwfyY8YY0ybpLfu3y2x8kTHAncBcNXoI78en9glgtqgVNR%2BvzIqCfBOixMG8XI2piSB1ujTsJfuFRm6PhBs3yB3r27VuZ3U0j2X0Y8A3zzDFpofpEdLzZ0RajzistDuKnPAnoN42nTmZye09hj7tFoUNTtz9oEoQ16k8Yx2XUeAB143ybAyGpwM1uPnpNSXh7AaFuc9s0RMS3jpVRZWsko%2BYHLiKDRyrz7W4gqpk1poFD43HQNTlEwuD5hSur5bI7D6VMd%2BdxgXdO8sjsN8%2BVJFCCxPE8NC7WFc25aKmaWtXIeGgA54PyF%2B%2FT3VnUzEyjEtRzLe8pr%2FYgHfJlSCiDyT%2BUD8%2F7w5%2FSqLVYsZ4IXaD1q2t3CoFm0Z8Bra5epd9OUo6RhYVJAwvborw8c7F0mSegSWOJCnEi1Zsmygy4HSTdiOIxj%2B3op6DNrB%2FzRBkm6wkdfuHHynk6GWOLaB%2B1skfTvoSK9Vpuvi9NYxlT2s1Sy%2B20XZbFaImCOvMuwZugvL7Kon4vGztU%2FPdAWHDFxXuah8EOLvgiaWmTQcBTSDz2F9i3qsG7qRIAwUuAgey6RfAd5udrpCV49VTwsgpASY%2BIzx7bxNCVQeq0uwrw2jyZhm9IbibHdl%2FyZJy4aAh6l4yfFjSVqJOpFkx77yV%2FMO42TKWCCQteoP7qoUoXfoEG%2Bcq6N8vK%2BnDpaignHEcXJzE99C2%2B2Zz";
    let stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
        token: token,
        outputElement: "#output"
    });
    stream.on('data', data => {
        console.log(data);
        let result = data.results[0].alternatives[0].transcript;
        document.querySelector("#cons").appendChild(document.createTextNode(result));
        if (result == "Scroll. "){
            scrollBy(0, 100);
        }
      });
    stream.on("error", err =>{
        console.log(err);
    });
    document.querySelector(".stop").onclick = () => {
        stream.stop();
    };
};