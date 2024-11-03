% Parameters
fs = 2.048e6; % Sampling frequency (Hz)
nfft = 1024; % Number of FFT points
window_length = 256; % Window length for the spectrogram
window = hamming(window_length); % Hamming window function
noverlap = round(0.8 * window_length); % 80% overlap

% Load raw IQ data
fid = fopen("C:\Users\jason\OneDrive\Desktop\ECE-570\LoraProject\GNURadio\LoRaBroadcastRecording", 'rb');
iq_data = fread(fid, 'float'); % Read as float
fclose(fid);

% Convert to complex IQ data
if mod(length(iq_data), 2) ~= 0
    error('IQ data length must be even.');
end

% Calculate the number of samples to process (first half)
total_samples = length(iq_data) / 2; % Total number of complex samples
samples_to_process = floor(total_samples / 2); % First half

% Extract the first half of the IQ data
I = iq_data(1:2:(2 * samples_to_process)); % In-phase component
Q = iq_data(2:2:(2 * samples_to_process)); % Quadrature component
iq_data_complex = I + 1i * Q; % Combine I and Q into complex IQ data

% Generate the spectrogram
figure;
[S, F, T] = spectrogram(iq_data_complex, window, noverlap, nfft, fs, 'yaxis');

% Plot the spectrogram
imagesc(T, F, 10*log10(abs(S))); % Convert to dB for better visualization
axis xy; % Flip the y-axis
colorbar;
title('Spectrogram of First Half of IQ Data');
xlabel('Time (s)');
ylabel('Frequency (Hz)');

% Adjust the frequency limits to focus on the LoRa signal
ylim([0 1e5]); % Set y-axis limits to 0 to 100 kHz (adjust as needed)
xlim([0.8 1.8]); % Set x-axis limits to the time range

colormap(jet);
