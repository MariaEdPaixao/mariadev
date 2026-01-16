export default function useDownloadCv(){
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/curriculo-maria-eduarda.pdf";
        link.download = "Maria-Eduarda-CV.pdf";
        link.click();
    };

    return{
        handleDownload
    }
}