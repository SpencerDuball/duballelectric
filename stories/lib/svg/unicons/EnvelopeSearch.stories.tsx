import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeSearch, EnvelopeSearchPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EnvelopeSearch",
  component: EnvelopeSearch,
} as ComponentMeta<typeof EnvelopeSearch>;

const Template: ComponentStory<typeof EnvelopeSearch> = (
  args: EnvelopeSearchPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeSearch {...args} />
    <EnvelopeSearch {...args} fill="red.500" />
    <EnvelopeSearch {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
