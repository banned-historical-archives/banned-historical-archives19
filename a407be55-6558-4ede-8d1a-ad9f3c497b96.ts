export default {
  entity: {
    id: 'a407be55-6558-4ede-8d1a-ad9f3c497b96',
    name: '周恩来传（二）',
    internal: false,
    type: 'pdf',
    official: false,
    author: '金冲及',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives19/main/a407be55-6558-4ede-8d1a-ad9f3c497b96.pdf',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '周恩来传（二）',
        authors: [
          '金冲及',
        ],
        page_start: 1,
        page_end: 672,
        dates: [],
      },
    ],
    ocr: {
      use_onnx: true,
      det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
      rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
    },
  },
  parser_id: 'automation',
  path: 'a407be55-6558-4ede-8d1a-ad9f3c497b96.pdf',
  resource_type: 'book',
  version: 2,
};