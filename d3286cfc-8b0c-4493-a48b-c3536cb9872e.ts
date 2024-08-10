export default {
  "entity": {
    "id": "d3286cfc-8b0c-4493-a48b-c3536cb9872e",
    "name": "我的父亲邓小平",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "邓榕",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives19/main/d3286cfc-8b0c-4493-a48b-c3536cb9872e.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "我的父亲邓小平",
        "authors": [
          "邓榕"
        ],
        "page_start": 1,
        "page_end": 545,
        "dates": [
          {
            "year": 2000
          }
        ]
      }
    ],"ocr": {
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "d3286cfc-8b0c-4493-a48b-c3536cb9872e.pdf",
  "resource_type": "book",
  "version": 2
}
