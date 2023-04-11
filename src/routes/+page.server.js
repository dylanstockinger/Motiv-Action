import { supabase } from '$lib/supabase';

export async function load() {
	const { data: user, error } = await supabase.from('user').select('*');
	return {
		user: user ?? [],
		error
	};
}
