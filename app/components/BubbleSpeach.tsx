export default function BubbleSpeach({ message }: { message?: string }) {
    
    return (        
        <div className={`flex items-start gap-2.5 absolute left-[65%] ${message ? 'fade-in-up' : 'fade-out-down'}`}>
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    {message}
                </p>
            </div>
        </div>
    )
}
