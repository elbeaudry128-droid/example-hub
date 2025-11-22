import { exec } from 'child_process';
import axios from 'axios';

export class HtmlPipelineService {
    
    // Method to call Ruby gem via child process
    public static callRubyGem(command: string): Promise<string> {
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(`Error: ${stderr}`);
                    return;
                }
                resolve(stdout);
            });
        });
    }

    // Method to call Ruby gem via HTTP (assuming a local server is running)
    public static async callRubyGemHTTP(url: string, data: any): Promise<any> {
        try {
            const response = await axios.post(url, data);
            return response.data;
        } catch (error) {
            throw new Error(`HTTP Error: ${error}`);
        }
    }
}