declare const _default: {
    /**
     * 加密
     * @param plaintext 明文
     * @param publicKey 公钥
     */
    encrypt: (plaintext: string, publicKey: string) => string | false;
    /**
     * 解密
     * @param message 密文
     * @param privateKey 私钥
     */
    decrypt: (message: string, privateKey: string) => string | false;
};
export default _default;
