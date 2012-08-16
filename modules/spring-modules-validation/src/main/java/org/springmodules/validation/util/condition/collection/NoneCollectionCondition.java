/*
 * Copyright 2004-2009 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.springmodules.validation.util.condition.collection;

import java.lang.reflect.Array;
import java.util.Collection;
import java.util.Iterator;

import org.springmodules.validation.util.condition.Condition;

/**
 * An {@link AbstractCollectionCondition} implementation that checks whether none of the elements in a collection
 * or array adhere to a specific condition.
 *
 * @author Uri Boness
 */
public class NoneCollectionCondition extends AbstractCollectionElementCondition {

    /**
     * Constructs a new NoneCollectionCondition with a given condition.
     *
     * @param elementCondition The condition to be checked on the collection/array elements.
     */
    public NoneCollectionCondition(Condition elementCondition) {
        super(elementCondition);
    }

    /**
     * Checks whether none of the object in the given array adheres to the associated condition.
     *
     * @param array The array to be checked.
     * @return <code>true</code> none of the objects in the given array adheres to the associated condition,
     *         <code>false</code> otherwise.
     */
    protected boolean checkArray(Object array) {
        for (int i = 0; i < Array.getLength(array); i++) {
            if (getElementCondition().check(Array.get(array, i))) {
                return false;
            }
        }
        return true;
    }

    /**
     * Checks whether none of the elements in the given collection adheres to the associated condition.
     *
     * @param collection The collection to be checked.
     * @return <code>true</code> if none of the elements in the given collection adheres to the associated condition,
     *         <code>false</code> otherwise.
     */
    protected boolean checkCollection(Collection collection) {
        for (Iterator iter = collection.iterator(); iter.hasNext();) {
            if (getElementCondition().check(iter.next())) {
                return false;
            }
        }
        return true;
    }

}
