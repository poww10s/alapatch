import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const defaultState = {
  ids: [
    'vco1',
    'vco2',
    'mixer1',
    'pitch1',
    'filter1',
    'eg1',
    'amp1',
    'eg2',
    'lfo1',
    'lfo2',
    'patches1',
    'vco3',
    'vco4',
    'mixer2',
    'pitch2',
    'filter2',
    'eg3',
    'amp2',
    'eg4',
    'lfo3',
    'lfo4',
    'patches2',
    'vco5',
    'audioIn',
    'mixer3',
    'pitch3',
    'filter3',
    'fcMod',
    'eg4',
    'amp3',
    'lfo5',
    'lfo6',
    'levels',
    'pans',
    'modfx',
    'delay',
    'eq',
    'arpeggA',
    'arpeggB',
    'patch',
    'unusedPatch',
    'unusedTimbre1',
    'unusedTimbre2',
    'unusedVocoder',
  ],
  entities: {
    vco1: {
      id: 'vco1',
      waveform: 'Saw',
      dwgsOrModType: 'SynWave1',
      waveMod: 0,
      lfoMod: 0,
    },
    vco2: {
      id: 'vco2',
      waveform: 'Saw',
      dwgsOrModType: 'Off',
      waveMod: 0,
      lfoMod: 0,
    },
    vco3: {
      id: 'vco3',
      waveform: 'Saw',
      dwgsOrModType: 'SynWave1',
      waveMod: 0,
      lfoMod: 0,
    },
    vco4: {
      id: 'vco4',
      waveform: 'Saw',
      dwgsOrModType: 'Off',
      waveMod: 0,
      lfoMod: 0,
    },
    vco5: {
      id: 'vco5',
      waveform: 'Saw',
      dwgsOrModType: 'SynWave1',
      waveMod: 0,
      lfoMod: 0,
    },
    audioIn: {
      id: 'audioIn',
      gate: 0,
      threshold: 0,
      hpfLevel: 0,
      hpfGate: false,
    },
    mixer1: {
      id: 'mixer1',
      vol1: 127,
      vol2: 0,
      vol3: 0,
    },
    mixer2: {
      id: 'mixer2',
      vol1: 127,
      vol2: 0,
      vol3: 0,
    },
    mixer3: {
      id: 'mixer3',
      vol1: 127,
      vol2: 0,
      vol3: 0,
    },
    pitch1: {
      id: 'pitch1',
      voiceAssign: 'Mono',
      triggerMode: 'Single',
      transpose: 0,
      tune: 0,
      unisonDetune: 0,
      portamento: 0,
      bendRange: 0,
      vibratoIntensity: 0,
    },
    pitch2: {
      id: 'pitch2',
      voiceAssign: 'Mono',
      triggerMode: 'Single',
      transpose: 0,
      tune: 0,
      unisonDetune: 0,
      portamento: 0,
      bendRange: 0,
      vibratoIntensity: 0,
    },
    pitch3: {
      id: 'pitch3',
      voiceAssign: 'Mono',
      triggerMode: 'Single',
      transpose: 0,
      tune: 0,
      unisonDetune: 0,
      portamento: 0,
      bendRange: 0,
      vibratoIntensity: 0,
    },
    filter1: {
      id: 'filter1',
      filterType: '-24db Low Pass',
      cutoff: 0,
      resonance: 0,
      egIntensity: 0,
      keyboardTrack: 0,
    },
    filter2: {
      id: 'filter2',
      filterType: '-24db Low Pass',
      cutoff: 0,
      resonance: 0,
      egIntensity: 0,
      keyboardTrack: 0,
    },
    filter3: {
      id: 'filter3',
      shift: 2,
      cutoff: 0,
      resonance: 0,
      efSense: 0,
    },
    fcMod: {
      id: 'fcMod',
      source: 'Amp EG',
      intensity: 0,
    },
    eg1: {
      id: 'eg1',
      attack: 0,
      decay: 0,
      sustain: 127,
      release: 0,
      egReset: false,
    },
    amp1: {
      id: 'amp1',
      ampLevel: 127,
      panpot: 0,
      ampTrack: 0,
      distortion: false,
    },
    eg2: {
      id: 'eg2',
      attack: 0,
      decay: 0,
      sustain: 127,
      release: 0,
      egReset: false,
    },
    eg3: {
      id: 'eg3',
      attack: 0,
      decay: 0,
      sustain: 127,
      release: 0,
      egReset: false,
    },
    amp2: {
      id: 'amp2',
      ampLevel: 127,
      panpot: 0,
      ampTrack: 0,
      distortion: false,
    },
    eg4: {
      id: 'eg4',
      attack: 0,
      decay: 0,
      sustain: 127,
      release: 0,
      egReset: false,
    },
    eg5: {
      id: 'eg5',
      attack: 0,
      decay: 0,
      sustain: 127,
      release: 0,
      egReset: false,
    },
    amp3: {
      id: 'amp3',
      ampLevel: 127,
      directLevel: 0,
      ampTrack: 0,
      distortion: false,
    },
    lfo1: {
      id: 'lfo1',
      waveform: 'Saw',
      keySync: 'Off',
      tempoSync: false,
      frequency: 0,
      syncNote: '1/1',
    },
    lfo2: {
      id: 'lfo2',
      waveform: 'Saw',
      keySync: 'Off',
      tempoSync: false,
      frequency: 0,
      syncNote: '1/1',
    },
    lfo3: {
      id: 'lfo3',
      waveform: 'Saw',
      keySync: 'Off',
      tempoSync: false,
      frequency: 0,
      syncNote: '1/1',
    },
    lfo4: {
      id: 'lfo4',
      waveform: 'Saw',
      keySync: 'Off',
      tempoSync: false,
      frequency: 0,
      syncNote: '1/1',
    },
    lfo5: {
      id: 'lfo5',
      waveform: 'Saw',
      keySync: 'Off',
      tempoSync: false,
      frequency: 0,
      syncNote: '1/1',
    },
    lfo6: {
      id: 'lfo6',
      waveform: 'Saw',
      keySync: 'Off',
      tempoSync: false,
      frequency: 0,
      syncNote: '1/1',
    },
    patches1: {
      id: 'patches1',
      patch1: {
        source: 'Filter EG',
        destination: 'Pitch',
        modIntensity: 0,
      },
      patch2: {
        source: 'Filter EG',
        destination: 'Pitch',
        modIntensity: 0,
      },
      patch3: {
        source: 'LFO 1',
        destination: 'Pitch',
        modIntensity: 0,
      },
      patch4: {
        source: 'LFO 2',
        destination: 'Pitch',
        modIntensity: 0,
      },
    },
    patches2: {
      id: 'patches2',
      patch1: {
        source: 'Filter EG',
        destination: 'Pitch',
        modIntensity: 0,
      },
      patch2: {
        source: 'Filter EG',
        destination: 'Pitch',
        modIntensity: 0,
      },
      patch3: {
        source: 'LFO 1',
        destination: 'Pitch',
        modIntensity: 0,
      },
      patch4: {
        source: 'LFO 2',
        destination: 'Pitch',
        modIntensity: 0,
      },
    },
    levels: {
      id: 'levels',
      level1: 0,
      level2: 0,
      level3: 0,
      level4: 0,
      level5: 0,
      level6: 0,
      level7: 0,
      level8: 0,
    },
    pans: {
      id: 'pans',
      pan1: 0,
      pan2: 0,
      pan3: 0,
      pan4: 0,
      pan5: 0,
      pan6: 0,
      pan7: 0,
      pan8: 0,
    },
    modfx: {
      id: 'modfx',
      type: 'Flanger/Chorus',
      lfoSpeed: 0,
      effectDepth: 0,
    },
    delay: {
      id: 'delay',
      type: 'Stereo Delay',
      tempoSync: false,
      syncNote: '1/32',
      delayTime: 0,
      delayDepth: 0,
    },
    eq: {
      id: 'eq',
      lowFrequency: 40,
      lowGain: 0,
      highFrequency: 1.0,
      highGain: 0,
    },
    arpeggA: {
      id: 'arpeggA',
      tempo: 20,
      resolution: '1/24',
      gate: 0,
      type: 'Up',
      range: 1,
    },
    arpeggB: {
      id: 'arpeggB',
      latch: false,
      swing: 0,
      keySync: false,
      lastStep: 1,
      target: 'Both',
      pattern: [0, 0, 0, 0, 0, 0, 0, 0],
    },
    patch: {
      id: 'patch',
      name: 'Default',
      mode: 'Single',
    },
    unusedPatch: {
      id: 'unusedPatch',
      scaleKey: 0,
      scaleType: 0,
      keyboardOctave: 0,
      arpSwitch: 0,
    },
    unusedTimbre1: {
      id: 'unusedTimbre1',
      midiChannel: 0,
      keyPriority: 0,
      filterVelSense: 0,
      ampSwitch: 0,
      ampVelSense: 0,
    },
    unusedTimbre2: {
      id: 'unusedTimbre2',
      midiChannel: 0,
      keyPriority: 0,
      filterVelSense: 0,
      ampSwitch: 0,
      ampVelSense: 0,
    },
    unusedVocoder: {
      id: 'unusedVocoder',
      egReset2: 0,
      midiChannel: 0,
      keyPriority: 0,
      filterEFSense: 0,
      ampVelSense: 0,
      eg2attack: 0,
      eg2decay: 0,
      eg2sustain: 0,
      eg2release: 0,
    },
  },
  unsaved: false,
  activeTab: 'Timbre1',
};

const parametersAdapter = createEntityAdapter({});

const parametersSlice = createSlice({
  name: 'parameters',
  initialState: parametersAdapter.getInitialState(defaultState),
  reducers: {
    parameterUpdated(state, action) {
      parametersAdapter.updateOne(state, action.payload);
      state.unsaved = true;
    },
    parameterRefreshAll: () => defaultState,
    parameterFlipUnsaved(state) {
      state.unsaved = !state.unsaved;
    },
    parameterUpdateTab(state, action) {
      state.activeTab = action.payload;
    },
    parameterFromFile(state, action) {
      parametersAdapter.upsertMany(state, action.payload);
    },
  },
});

export const {
  selectById,
  selectAll,
  selectEntities,
  selectIds,
} = parametersAdapter.getSelectors((state) => state.parameters);

export const {
  parameterAdded,
  parameterUpdated,
  parameterRefreshAll,
  parameterFlipUnsaved,
  parameterFromFile,
  parameterUpdateTab,
} = parametersSlice.actions;

export default parametersSlice.reducer;
