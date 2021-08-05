import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeBookmark, EnvelopeBookmarkPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EnvelopeBookmark",
  component: EnvelopeBookmark,
} as ComponentMeta<typeof EnvelopeBookmark>;

const Template: ComponentStory<typeof EnvelopeBookmark> = (
  args: EnvelopeBookmarkPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeBookmark {...args} />
    <EnvelopeBookmark {...args} fill="red.500" />
    <EnvelopeBookmark {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
