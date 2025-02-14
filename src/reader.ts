import workerUrl from "pdfjs-dist/build/pdf.worker.mjs?worker&url";
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = workerUrl;
console.log(workerUrl);
