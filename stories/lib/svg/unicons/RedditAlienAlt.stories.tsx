import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { RedditAlienAlt, RedditAlienAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/RedditAlienAlt",
  component: RedditAlienAlt,
} as ComponentMeta<typeof RedditAlienAlt>;

const Template: ComponentStory<typeof RedditAlienAlt> = (
  args: RedditAlienAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <RedditAlienAlt {...args} />
    <RedditAlienAlt {...args} fill="red.500" />
    <RedditAlienAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
