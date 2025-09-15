// src/api/base44Client.js
// Local stub of the Base44 client so the UI can run without the real SDK.
// Replace with the real SDK client and credentials later if you need the real integrations.

export const base44 = {
  integrations: {
    Core: {
      InvokeLLM: async (input = {}) => ({ data: { text: "Stub LLM response", input } }),
      SendEmail: async (opts = {}) => ({ ok: true, details: opts }),
      UploadFile: async (file) => ({ url: "/assets/mock-uploaded-file" }),
      CreateFileSignedUrl: async () => ({ url: "/assets/signed-url" }),
      ExtractDataFromUploadedFile: async () => ({ extracted: {} }),
      GenerateImage: async () => ({ url: "/assets/generated-image.png" })
    }
  },
  auth: {
    currentUser: null,
    login: async () => ({ ok: true }),
    logout: async () => ({ ok: true })
  }
};
