export default {
  entity: {
    id: '9dadba90-beca-4a55-8f20-df38fcfb84c2',
    name: '毛主席的孩子们——红卫兵一代的成长与经历',
    internal: false,
    type: 'pdf',
    official: false,
    author: '阿妮达·陈',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives19/main/9dadba90-beca-4a55-8f20-df38fcfb84c2.pdf',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '毛主席的孩子们——红卫兵一代的成长与经历',
        authors: [
          '阿妮达·陈',
        ],
        page_start: 1,
        page_end: 291,
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
  path: '9dadba90-beca-4a55-8f20-df38fcfb84c2.pdf',
  resource_type: 'book',
  version: 2,
};