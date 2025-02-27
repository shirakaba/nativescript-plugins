import { FetchParameters } from './fetch';
import { FileObject, FileOptions, SearchOptions } from './types';
export declare class StorageFileApi {
    protected url: string;
    protected headers: {
        [key: string]: string;
    };
    protected bucketId?: string;
    constructor(url: string, headers?: {
        [key: string]: string;
    }, bucketId?: string);
    /**
     * Uploads a file to an existing bucket.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param file The File object to be stored in the bucket.
     * @param fileOptions HTTP headers. For example `cacheControl`
     */
    upload(path: string, file: File | string, fileOptions?: FileOptions): Promise<{
        data: {
            Key: string;
        } | null;
        error: Error | null;
    }>;
    /**
     * Replaces an existing file at the specified path with a new one.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder`. The bucket already exist before attempting to upload.
     * @param file The file object to be stored in the bucket.
     * @param fileOptions HTTP headers. For example `cacheControl`
     */
    update(path: string, file: File | string, fileOptions?: FileOptions): Promise<{
        data: {
            Key: string;
        } | null;
        error: Error | null;
    }>;
    /**
     * Moves an existing file, optionally renaming it at the same time.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
     */
    move(fromPath: string, toPath: string): Promise<{
        data: {
            message: string;
        } | null;
        error: Error | null;
    }>;
    /**
     * Create signed url to download file without requiring permissions. This URL can be valid for a set number of seconds.
     *
     * @param path The file path to be downloaded, including the current file name. For example `folder/image.png`.
     * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
     */
    createSignedUrl(path: string, expiresIn: number): Promise<{
        data: {
            signedURL: string;
        } | null;
        error: Error | null;
        signedURL: string | null;
    }>;
    /**
     * Downloads a file.
     *
     * @param path The file path to be downloaded, including the path and file name. For example `folder/image.png`.
     */
    download(path: string): Promise<{
        data: Blob | null;
        error: Error | null;
    }>;
    /**
     * Deletes files within the same bucket
     *
     * @param paths An array of files to be deletes, including the path and file name. For example [`folder/image.png`].
     */
    remove(paths: string[]): Promise<{
        data: FileObject[] | null;
        error: Error | null;
    }>;
    /**
     * Get file metadata
     * @param id the file id to retrieve metadata
     */
    /**
     * Update file metadata
     * @param id the file id to update metadata
     * @param meta the new file metadata
     */
    /**
     * Lists all the files within a bucket.
     * @param path The folder path.
     * @param options Search options, including `limit`, `offset`, and `sortBy`.
     * @param parameters Fetch parameters, currently only supports `signal`, which is an AbortController's signal
     */
    list(path?: string, options?: SearchOptions, parameters?: FetchParameters): Promise<{
        data: FileObject[] | null;
        error: Error | null;
    }>;
    _getFinalPath(path: string): string;
}
