const assert = require('assert');
const uploadFile = require('../src/fileUploadComponent');

describe('File Upload Component', function() {
  describe('#uploadFile()', function() {
    it('should return success message when file is uploaded', function() {
      const file = { name: 'example.txt', size: 1024 };
      const result = uploadFile(file);
      assert.strictEqual(result, 'File example.txt successfully uploaded.');
    });
  });
});
