import { useContext } from 'react';

// context
import dictionaryContext from '../../context/dictionary/context.js';

// material-ui components

const Definitions = () => {
  // context for fetched data
  const { meanings, language, word, isLight } = useContext(dictionaryContext);
  console.log(meanings);

  return (
    <section className="Definitions">
      {/* audio */}
      {meanings[0] && word && language === 'en' && (
        <audio
          className="singleDefinition__audio"
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support audio elements
        </audio>
      )}

      {word === '' ? (
        <span className="subTitle">
          Select a language & type a word to start
        </span>
      ) : (
        meanings.map((meaning) =>
          meaning.meanings.map((item) =>
            item.definitions.map((definition) => (
              <div
                className="singleDefinition__Container"
                style={{
                  background: isLight
                    ? 'linear-gradient(145deg, #c4c4c4, #e9e9e9)'
                    : 'linear-gradient(145deg, #2e2e2e, #373737)',
                  color: isLight ? '#333' : '#dadada',
                  boxShadow: isLight
                    ? '5px 5px 10px #1c1c1c, -5px -5px 10px #4a4a4a'
                    : '5px 5px 10px #767676, -5px -5px 10px #ffffff',
                }}
              >
                {/* definition */}
                <span className="singleDefinition__Text">
                  <span className="singleDefinition__Headers">
                    Definition:{' '}
                  </span>
                  {definition.definition}
                </span>
                {/* example */}
                {definition.example && (
                  <>
                    <hr className="singleDefinition__break" />
                    <span className="singleDefinition__example">
                      <span className="singleDefinition__Headers">
                        Example:{' '}
                      </span>
                      {definition.example}
                    </span>
                  </>
                )}
                {/* synonymous */}
                {definition.synonyms && definition.synonyms.length > 0 && (
                  <>
                    <hr className="singleDefinition__break" />
                    <span className="singleDefinition__synonyms">
                      <span className="singleDefinition__Headers">
                        Synonyms:{' '}
                      </span>
                      {definition.synonyms.map((synonyms) => `${synonyms}. `)}
                    </span>
                  </>
                )}
              </div>
            ))
          )
        )
      )}
    </section>
  );
};

export default Definitions;
