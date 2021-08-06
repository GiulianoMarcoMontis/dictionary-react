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
        <span className="subTitle">Type a word</span>
      ) : (
        meanings.map((meaning) =>
          meaning.meanings.map((item) =>
            item.definitions.map((definition) => (
              <div
                className="singleDefinition__Container"
                style={{
                  backgroundColor: isLight ? '#dadada' : '#222',
                  color: isLight ? '#1a1a1a' : '#dadada',
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
